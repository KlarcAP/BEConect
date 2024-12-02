import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { IoMdAdd } from "react-icons/io";
import { summary } from "../assets/data";
import { getInitials } from "../utils";
import clsx from "clsx";
import ConfirmatioDialog, { UserAction } from "../components/Dialogs";
import AddUser from "../components/AddUser";
import { useDeleteUserMutation, useGetTeamListQuery, useUseActionMutation } from "../redux/slices/api/userApiSlice";
import { setOpenSidebar } from "../redux/slices/authSlice";
import { toast } from "sonner";

const Users = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  const [selected, setSelected] = useState(null);

  const {data, isLoading, refetch } = useGetTeamListQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [userAction] = useUseActionMutation();
  
  const userActionHandler = async() => {
    try {
      const result = await userAction({
        isActive: !selected?.isActive,
        id: selected?._id,

      });

      refetch();
      toast.success(result.data.message);
        setSelected(null);
        setTimeout(() => {
          setOpenAction(false);
          window.location.reload();
        }, 500);
    } catch (error) {
      console.log(err);
      toast.error(err?.data?.message || err.error);
    }
  };
  const deleteHandler = async() => {
    try {
      const result = await deleteUser(selected)

      refetch()
        toast.success("Deletado com sucesso");
        setSelected(null);

        setTimeout(() => {
          setOpenDialog(false);
          window.location.reload();
        }, 500);

    } catch (error) {
      console.log(err);
      toast.error(err?.data?.message || err.error); 
    }
  };

  const deleteClick = (id) => {
    setSelected(id);
    setOpenDialog(true);
  };

  const editClick = (el) => {
    setSelected(el);
    setOpen(true);

  };

  const userStatusClick = (el) =>{
    setSelected(el);
    setOpenAction(true);
  };
  
  const TableHeader = () => (
    <thead className='border-b border-gray-300'>
      <tr className='text-black dark:text-white text-left'>
        <th className='py-2'>Nome Completo</th>
        <th className='py-2'>Apelido</th>
        <th className='py-2'>Email</th>
        <th className='py-2'>Função</th>
        <th className='py-2'>Disponibilidade</th>
      </tr>
    </thead>
  );

  const TableRow = ({ user }) => (
    <tr className='border-b border-gray-200 text-gray-600 dark:text-white hover:bg-gray-400/10'>
      <td className='p-2'>
        <div className='flex items-center gap-3'>
          <div className='w-9 h-9 rounded-full text-white flex items-center justify-center text-sm bg-purple-500'>
            <span className='text-xs md:text-sm text-center'>
              {getInitials(user.name)}
            </span>
          </div>
          {user.name}
        </div>
      </td>

      <td className='p-2'>{user.title}</td>
      <td className='p-2'>{user.email || "user.emal.com"}</td>
      <td className='p-2'>{user.role}</td>

      <td>
        <button
          type="button"
          onClick={() => userStatusClick(user)}
          className={clsx(
            "w-fit px-4 py-1 rounded-full",
            user?.isActive ? "bg-purple-200" : "bg-yellow-100"
          )}
        >
          {user?.isActive ? "Ativo" : "Desativado"}
        </button>
      </td>

      <td className='p-2 flex gap-4 justify-end'>
        <Button
          className='text-purple-500 hover:text-purple-500 font-semibold sm:px-0'
          label='Editar'
          type='button'
          onClick={() => editClick(user)}
        />

        <Button
          className='text-red-700 hover:text-red-500 font-semibold sm:px-0'
          label='Deletar'
          type='button'
          onClick={() => deleteClick(user?._id)}
        />
      </td>
    </tr>
  );

  return (
    <>
      <div className='w-full md:px-1 px-0 mb-6'>
        <div className='flex items-center justify-between mb-8'>
          <Title title='  Time de Membros' />
          <Button
            label='Adicionar Novo Usuário'
            icon={<IoMdAdd className='text-lg' />}
            className='flex flex-row-reverse gap-1 items-center bg-purple-500 text-white rounded-md 2xl:py-2.5'
            onClick={() => setOpen(true)}
          />
        </div>

        <div className='bg-white dark:bg-gray-800 px-2 md:px-4 py-4 shadow-md rounded'>
          <div className='overflow-x-auto'>
            <table className='w-full mb-5'>
              <TableHeader />
              <tbody>
                {data?.map((user, index) => (
                  <TableRow key={index} user={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AddUser
        open={open}
        setOpen={setOpen}
        userData={selected}
        key={new Date().getTime().toString()}
      />

      <ConfirmatioDialog
        open={openDialog}
        setOpen={setOpenDialog}
        onClick={deleteHandler}
      />

      <UserAction
        open={openAction}
        setOpen={setOpenAction}
        onClick={userActionHandler}
      />
    </>
  );
};

export default Users;
