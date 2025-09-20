import { Button } from "@/components/v1/button/button";
import { PasswordInput } from "./_components/PasswordInput";
import { AuthLayout } from "@/components/v1/layouts/auth-layout/auth-layout";
import { Link, useNavigate } from "@tanstack/react-router";
import { Checkbox, CheckboxField } from "@/components/v1/checkbox/checkbox";
import { Label } from "@/components/v1/fieldset/fieldset";
import { Heading } from "@/components/v1/heading/heading";
import { Text } from "@/components/v1/text/text";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import type { SignupFormSchema } from "./types";
import { useLogin } from "@/hooks/api/auth";
import { Input } from "@/components/v1/input/input";
import { createNotification } from "@/components/notifications";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { mutateAsync: capconsDashboardUserLoginAsyncMutation, isPending } =
    useLogin();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupFormSchema>({
    defaultValues: {
      rememberMe: true,
    },
  });

  const onSubmit: SubmitHandler<SignupFormSchema> = async (data) => {
    await capconsDashboardUserLoginAsyncMutation(
      {
        credential: data.credential,
        password: data.password,
        country_code: "",
        circle_id: "",
        remember_me: data.rememberMe ? "yes" : "no",
      },
      {
        onSuccess: () => {
          createNotification({
            type: "success",
            title: "Login Successful",
            text: "Welcome back! Redirecting to your dashboard...",
          });

          navigate({ to: "/" });
        },
      }
    );
  };

  return (
    <AuthLayout>
      <div>
        <Link to={"/"} className="relative mb-6 -ml-1 flex items-center gap-1">
          <img src={"/favicon.ico"} width={26} height={26} alt="Capcons" />
          <span className="font-bold text-2xl">CapCons.</span>
        </Link>

        <div className="flex flex-col">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid w-full md:max-w-sm grid-cols-1"
          >
            <div className="mb-8 md:min-w-[20.1rem] lg:w-1/6">
              <Heading>Welcome Back</Heading>
              <Text className="text-bunker-600 dark:text-bunker-400">
                Enter your credentials and password
              </Text>
            </div>

            <div className=" md:min-w-[20.1rem] lg:w-1/6">
              <Controller
                name="credential"
                control={control}
                rules={{ required: "Email is required" }}
                disabled={isPending}
                render={({ field }) => (
                  <Input
                    placeholder="Email address"
                    className="text-xs/6 !placeholder:text-sm/6 h-10 shadow-none"
                    type="email"
                    {...field}
                  />
                )}
              />
              {errors.credential && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.credential.message}
                </p>
              )}
            </div>

            <div className="  mt-2 md:min-w-[20.1rem] lg:w-1/6">
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password is required" }}
                disabled={isPending}
                render={({ field }) => (
                  <PasswordInput
                    {...field}
                    autoComplete="off"
                    placeholder="Password"
                  />
                )}
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mt-4  md:min-w-[20.1rem] lg:w-1/6">
              <div className="flex flex-row justify-between">
                <CheckboxField className="!gap-x-2">
                  <Controller
                    name="rememberMe"
                    control={control}
                    disabled={isPending}
                    render={({ field }) => (
                      <Checkbox
                        color="primary"
                        checked={field.value}
                        onChange={(checked) => field.onChange(checked)}
                        disabled={field.disabled}
                      />
                    )}
                  />
                  <Label className="font-medium">Remember me?</Label>
                </CheckboxField>

                <div>
                  <Link
                    to="/forgot-password"
                    disabled={isPending}
                    className="cursor-pointer text-xs/6 font-medium text-primary hover:underline hover:decoration-primary-700 hover:underline-offset-4 duration-200"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 md:min-w-[20.1rem] lg:w-1/6">
              <Button
                type="submit"
                disabled={isPending}
                isLoading={isPending}
                className="w-full h-10 text-xs cursor-pointer"
              >
                Sign In
              </Button>
            </div>
          </form>

          <div className="mt-6 flex flex-row text-xs text-bunker-600 dark:text-bunker-400">
            <Link to="/signup" disabled={isPending} className="mx-auto">
              <div className="cursor-pointer text-center font-medium text-bunker-800 dark:text-bunker-400 hover:text-bunker-600 dark:hover:text-bunker-200 hover:underline hover:decoration-primary-700 hover:underline-offset-4 duration-200">
                Don&apos;t have an account yet?{" "}
                <span className="text-primary">Sign up here</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
