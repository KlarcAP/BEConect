import React, { useState } from "react";
import ModalWrapper from "../ModalWrapper";
import { Dialog } from "@headlessui/react";
import Textbox from "../Textbox";
import { useForm } from "react-hook-form";
import UserList from "./UserList";
import SelectList from "../SelectList";
import { BiImages } from "react-icons/bi";
import Button from "../Button";
import { toast } from "sonner";
import {getStorage, ref, getDownloadURL, uploadBytesResumable} from "firebase/storage" 
import {app} from "../../utils/firebase"
import { useCreateTaskMutation, useUpdateTaskMutation } from "../../redux/slices/api/taskApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dateFormatter } from "../../utils";


const LISTS = ["RECRUTANDO", "EM ANDAMENTO", "FINALIZADO"];
const PRIORIRY = ["ALTA", "MÉDIA", "NORMAL", "BAIXA"];

const uploadedFileURLs = [];

const AddTask = ({ open, setOpen, task }) => {

  const defaultValues = {
    title: task?.title || "",
    date: dateFormatter(task?.date || new Date()),
    team: [],
    stage: "",
    priority: "",
    assets: [],
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({defaultValues});


  const [team, setTeam] = useState(task?.team || []);
  const [stage, setStage] = useState(task?.stage?.toUpperCase() || LISTS[0]);
  const [priority, setPriority] = useState(
    task?.priority?.toUpperCase() || PRIORIRY[4]
  );
  const [assets, setAssets] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [createTask, {isLoading}] = useCreateTaskMutation();
  const [updateTask, {isLoading: isUpdate}] = useUpdateTaskMutation();
  const URLS = task?.assets ? [... task.assets] : [];

  const submitHandler = async (data) => {
    for (const file of assets){
      setUploading(true);
      try {
        await uploadFile(file);
      } catch (error) {
        console.error("Erro ao carregar o arquivo: ", error.message);
        return;
      }finally{
        setUploading(false);
      }
    }
      try {
        const newData = {
          ...data,
          assets: [...URLS, ...uploadedFileURLs],
          team,
          stage,
          priority,
        };

        const res = task?._id
          ? await updateTask({...newData, _id: task._id }).unwrap()
          : await createTask(newData).unwrap();

        toast.success(res.message);

        setTimeout(() =>{
          setOpen(false);
          window.location.reload();
        }, 500);
      } catch (err) {
        console.log(err);
        toast.error(err?.data?.message || err.error);
        
      }
  };

  const handleSelect = (e) => {
    setAssets(e.target.files);
  };

  const uploadFile = async (file) => {
    const storage = getStorage(app);

    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);

    const uploadTask = uploadBytesResumable(storageRef, file);
    
    return new Promise ((resolve, reject ) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log("Enviando...");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              uploadedFileURLs.push(downloadURL);
              resolve();
            })
            .catch((error) => {
              reject(error)
            });
        }
      );
    });
  };

  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Dialog.Title
            as='h2'
            className='text-base font-bold leading-6 text-gray-900 mb-4'
          >
            {task ? "MODIFICAR PROJETO" : "ADICIONAR PROJETO"}
          </Dialog.Title>

          <div className='mt-2 flex flex-col gap-6'>
            <Textbox
              placeholder='Nome do Projeto'
              type='text'
              name='title'
              label='Nome do Projeto'
              className='w-full rounded'
              register={register("title", { required: "Title is required" })}
              error={errors.title ? errors.title.message : ""}
            />

            <UserList setTeam={setTeam} team={team} />

            <div className='flex gap-4'>
              <SelectList
                label='Etapa do Projeto'
                lists={LISTS}
                selected={stage}
                setSelected={setStage}
              />

              <div className='w-full'>
                <Textbox
                  placeholder='Data'
                  type='date'
                  name='date'
                  label='Data do Projeto'
                  className='w-full rounded'
                  register={register("date", {
                    required: "Data é necessário!",
                  })}
                  error={errors.date ? errors.date.message : ""}
                />
              </div>
            </div>

            <div className='flex gap-4'>
              <SelectList
                label='Level de Prioridade'
                lists={PRIORIRY}
                selected={priority}
                setSelected={setPriority}
              />

              <div className='w-full flex items-center justify-center mt-4'>
                <label
                  className='flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer my-4'
                  htmlFor='imgUpload'
                >
                  <input
                    type='file'
                    className='hidden'
                    id='imgUpload'
                    onChange={(e) => handleSelect(e)}
                    accept='.jpg, .png, .jpeg'
                    multiple={true}
                  />
                  <BiImages />
                  <span>Anexar Imagem</span>
                </label>
              </div>
            </div>

            <div className='bg-gray-50 py-6 sm:flex sm:flex-row-reverse gap-4'>
              {uploading ? (
                <span className='text-sm py-2 text-red-500'>
                  Anexar Imagem
                </span>
              ) : (
                <Button
                  label='Concluir'
                  type='submit'
                  className='bg-purple-500 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto'
                />
              )}

              <Button
                type='button'
                className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
                onClick={() => setOpen(false)}
                label='Cancelar'
              />
            </div>
          </div>
        </form>
      </ModalWrapper>
    </>
  );
};

export default AddTask;
