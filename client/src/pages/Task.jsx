import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { useParams } from "react-router-dom";
import Loading from "../components/Loader";
import Title from "../components/Title";
import Button from "../components/Button";
import { IoMdAdd } from "react-icons/io";
import Tabs from "../components/Tabs";
import TaskTitle from "../components/TaskTitle";
import BoardView from "../components/BoardView";
import { tasks } from "../assets/data";
import Table from "../components/task/Table";
import AddTask from "../components/task/AddTask";
import { useGetAllTaskQuery } from "../redux/slices/api/taskApiSlice";

const TABS = [
  { title: "Projetos Criados", icon: <MdGridView /> },
  { title: "Lista de Projetos Criados", icon: <FaList /> },
];

const TASK_TYPE = {
  recrutando: "bg-purple-500",
  "em andamento": "bg-yellow-600",
  finalizado: "bg-green-600",
};

const Task = () => {
  const params = useParams();

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);


  const status = params?.status || "";

  const {data, isLoading } = useGetAllTaskQuery({
    strQuery: status, isTrashed: "", search: "",
  });

  return isLoading ? (
    <div className='py-10'>
      <Loading />
    </div>
  ) : (
    <div className='w-full dark:bg-gray-700'>
      <div className='flex items-center justify-between mb-4'>
      <Title title={`${status} `} />

        {!status && (
          <Button
            onClick={() => setOpen(true)}
            label='Criar Projeto'
            icon={<IoMdAdd className='text-lg' />}
            className='flex flex-row-reverse gap-1 items-center bg-purple-500 text-white rounded-md py-2 2xl:py-2.5'
          />
        )}
      </div>

      <Tabs tabs={TABS} setSelected={setSelected}>
        {!status && (
          <div className='w-full flex justify-between gap-4 md:gap-x-12 py-4'>
            <TaskTitle label='Recrutando' className={TASK_TYPE.recrutando} />
            <TaskTitle
              label='Em Andamento'
              className={TASK_TYPE["em andamento"]}
            />
            <TaskTitle label='Finalizados' className={TASK_TYPE.finalizado} />
          </div>
        )}

        {selected !== 1 ? (
          <BoardView tasks={data?.tasks} />
        ) : (
          <div className='w-full'>
            <Table tasks={data?.tasks} />
          </div>
        )}
      </Tabs>

      <AddTask open={open} setOpen={setOpen} />
    </div>
  );
};

export default Task;
