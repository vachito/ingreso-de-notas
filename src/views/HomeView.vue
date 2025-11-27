<!-- <script setup lang="ts">
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import Button from '@/components/ui/button/Button.vue';
</script> -->

<!-- <template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full md:w-3/4 xl:w-3/12 space-y-6 mx-auto bg-white p-6 rounded-2xl shadow">
      <FieldSet>
        <FieldLegend class=" text-center text-2xl uppercase my-4">Inicio de sesión</FieldLegend>
        <FieldDescription class=" text-xl">
          Ingresa tu email y contraseña para iniciar sesión.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel for="email">
              Email:
            </FieldLabel>
            <Input id="email" type="text" placeholder="correo@correo.com" class=" placeholder:text-gray-400" />
          </Field>

          <Field>
            <FieldLabel for="password">
              contraseña
            </FieldLabel>
            <Input id="password" type="text" placeholder="***********" />
          </Field>

          <Button>Ingresar</Button>
        </FieldGroup>
      </FieldSet>
    </div>
  </div>
</template> -->

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class=" flex justify-center items-center h-screen">
    <Card class="w-full md:w-3/12 mx-auto">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">
            Sign Up
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid w-full items-center gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <div class="flex items-center">
                <Label for="password">Password</Label>
                <a href="#" class="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex flex-col gap-2">
        <Button class="w-full">
          Login
        </Button>
        <Button variant="outline" class="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
