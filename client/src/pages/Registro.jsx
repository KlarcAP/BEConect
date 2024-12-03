import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../redux/slices/api/authApiSlice";
import { toast } from 'sonner';
import { setCredentials } from "../redux/slices/authSlice";
import Loading from "../components/Loader";

const Register = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const submitHandler = async (data) => {
    try {
      const result = await registerUser(data).unwrap();
      dispatch(setCredentials(result));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || error.message);
    }
  };

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]'>
      <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
        {/* left side */}
        <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
            <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600'>
              Conectando talentos, construindo futuros.
            </span>
            <p className='flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-purple-700'>
              <span>BeConect.</span>
              <span>Junte-se a nós!</span>
            </p>

            <div className='cell'>
              <div className='circle rotate-in-up-left'></div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'
          >
            <div className=''>
              <p className='text-blue-600 text-3xl font-bold text-center'>
                Crie sua conta
              </p>
              <p className='text-center text-base text-gray-700 '>
                Gerencie seu futuro com o BeConect.
              </p>
            </div>

            <div className='flex flex-col gap-y-5'>
              <Textbox
                placeholder='Seu nome completo'
                type='text'
                name='name'
                label='Nome Completo'
                className='w-full rounded-full'
                register={register("name", {
                  required: "Nome completo é obrigatório",
                })}
                error={errors.name ? errors.name.message : ""}
              />
              <Textbox
                placeholder='Email@exemplo.com'
                type='email'
                name='email'
                label='Endereço de email'
                className='w-full rounded-full'
                register={register("email", {
                  required: "Endereço de email é obrigatório",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder='Sua senha'
                type='password'
                name='password'
                label='Senha'
                className='w-full rounded-full'
                register={register("password", {
                  required: "Senha é obrigatória",
                  minLength: {
                    value: 6,
                    message: "A senha deve ter pelo menos 6 caracteres",
                  },
                })}
                error={errors.password ? errors.password.message : ""}
              />
              <Textbox
                placeholder='Confirme sua senha'
                type='password'
                name='confirmPassword'
                label='Confirme a senha'
                className='w-full rounded-full'
                register={register("confirmPassword", {
                  required: "Confirmação de senha é obrigatória",
                  validate: (value) =>
                    value === watch("password") || "As senhas não conferem",
                })}
                error={errors.confirmPassword ? errors.confirmPassword.message : ""}
              />

              {isLoading ? (
                <Loading />
              ) : (
                <Button
                  type='submit'
                  label='Cadastrar'
                  className='w-full h-10 bg-blue-700 text-white rounded-full'
                />
              )}

                <a href="/log-in" className='text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer'>
                   Já possui conta?
                </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
