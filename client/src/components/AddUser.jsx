import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from "./ModalWrapper";
import { Dialog } from "@headlessui/react";
import Textbox from "./Textbox";
import Loading from "./Loader";
import Button from "./Button";
import { useRegisterMutation } from "../redux/slices/api/authApiSlice";
import { toast } from "sonner";
import { useUpdateUserMutation } from "../redux/slices/api/userApiSlice";


const AddUser = ({ open, setOpen, userData }) => {
  let defaultValues = userData ?? {};
  const { user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });


  const dispatch = useDispatch()

  const [addNewUser, {isLoading}] = useRegisterMutation();
  const [updateUser, {isLoading: isUpdating}] = useUpdateUserMutation()  

  const handleOnSubmit = async (data) => {
    try {
      if(userData){
        const result = await updateUser(data).unwrap();

        toast.success("Perfil atualizado com sucesso");

        if(userData?._id === user>_id){
          dispatch(setCredentials({...result.user}));
        }
      }else{
        await addNewUser({...data, password: data.email,}).unwrap();
        toast.success("Novo usuário adicionado com sucesso!");
      }


      setTimeout(() => {
        setOpen(false)
        window.location.reload();
      },1500);
    } catch (error) {
      toast.error("Algo deu errado");
    }
  };

  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)} className=''>
          <Dialog.Title
            as='h2'
            className='text-base font-bold leading-6 text-gray-900 mb-4'
          >
            {userData ? "ATUALIZAR PERFIL" : "ADICIONAR NOVO USUÁRIO"}
          </Dialog.Title>
          <div className='mt-2 flex flex-col gap-6'>
            <Textbox
              placeholder='Nome Completo'
              type='text'
              name='name'
              label='Nome Completo'
              className='w-full rounded'
              register={register("name", {
                required: "Nome completo é necessário!",
              })}
              error={errors.name ? errors.name.message : ""}
            />
            <Textbox
              placeholder='Apelido'
              type='text'
              name='title'
              label='Apelido'
              className='w-full rounded'
              register={register("title", {
                required: "Apelido é necessário!",
              })}
              error={errors.title ? errors.title.message : ""}
            />
            <Textbox
              placeholder='Email@exemplo.com'
              type='email'
              name='email'
              label='Endereço de email'
              className='w-full rounded'
              register={register("email", {
                required: "Endereço de email é necessário!",
              })}
              error={errors.email ? errors.email.message : ""}
            />

            <Textbox
              placeholder='Função'
              type='text'
              name='role'
              label='Função'
              className='w-full rounded'
              register={register("role", {
                required: "Uma função é necessária!",
              })}
              error={errors.role ? errors.role.message : ""}
            />
          </div>

          {isLoading || isUpdating ? (
            <div className='py-5'>
              <Loading />
            </div>
          ) : (
            <div className='py-3 mt-4 sm:flex sm:flex-row-reverse'>
              <Button
                type='submit'
                className='bg-purple-500 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto'
                label='Submit'
              />

              <Button
                type='button'
                className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
                onClick={() => setOpen(false)}
                label='Cancel'
              />
            </div>
          )}
        </form>
      </ModalWrapper>
    </>
  );
};

export default AddUser;
