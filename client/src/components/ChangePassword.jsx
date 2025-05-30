import { Dialog } from "@headlessui/react";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import ModalWrapper from "./ModalWrapper";
import Textbox from "./Textbox";
import { toast } from "sonner";
import Loading from "./Loader";
import { useChangePasswordMutation } from "../redux/slices/api/userApiSlice";




const ChangePassword = ({ open, setOpen }) => {
    const{
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const [changeUserPassword, { isLoading }] = useChangePasswordMutation();

    const handleOnSubmit = async (data) => {
        if(data.password !== data.cpass){
            toast.warning("As senhas não correspondem");
            return;
        }
        try {
            const res = await changeUserPassword(data).unwrap();
            toast.success("Senha Alterada Com Sucesso");

            setTimeout(() => {
                setOpen(false);
                window.location.reload();
            }, 1500);
        } catch (err) {
            console.log(err);
            toast.error(err?.data?.message || err.error);
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
                        Alterar a senha
                    </Dialog.Title>
                    <div className='mt-2 flex flex-col gap-6'>
                        <Textbox
                            placeholder='Nova Senha'
                            type='password'
                            name='password'
                            label='Nova Senha'
                            className='w-full rounded'
                            register={register("password", {
                                required: "Nova senha é necessária!",
                            })}
                            error={errors.password ? errors.password.message : ""}
                            />
                            <Textbox
                                placeholder='Confirmar nova senha'
                                type= 'password'
                                name= 'cpass'
                                label='Confirmar nova senha'
                                className='w-full rounded'
                                register={register("cpass", {
                                    required: "Confirmar nova senha é obrigatório!", 
                                })}
                                error={errors.cpass ? errors.cpass.message : ""}
                                />
                            </div>
                                
                                {isLoading ? (
                                    <div className='py-5'>
                                        <Loading />
                                    </div>
                                ) : (
                                    <div className='py-3 mt-4 sm:flex sm:flex-row-reverse'>
                                        <Button
                                            type='submit'
                                            className='bg-purple-500 px-8 text-sm font-semibold text-white houver-bg-blue-2'
                                            label='Salvar'
                                        />
                                        <button
                                            type = 'button'
                                            className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
                                            onClick={() => setOpen(false)}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                )}
                            </form>
            </ModalWrapper>
        
        </>
    );

};

export default ChangePassword;