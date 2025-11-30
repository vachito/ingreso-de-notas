<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const data = reactive({
  name: '',
  lastname: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const handleRegister = () => {
  console.log('Register data:', data)
}
</script>

<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Crea una cuenta</CardTitle>
      <CardDescription> Ingresa tus datos</CardDescription>
    </CardHeader>

    <CardContent>
      <form>
        <div class="grid w-full items-center gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="name">Nombre</Label>
            <Input
              id="name"
              type="text"
              placeholder="Ingresa tu nombre"
              class="placeholder:text-gray-300"
              v-model="data.name"
            />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="lastname">Apellido</Label>
            <Input
              id="lastname"
              type="text"
              placeholder="Ingresa tu apellido"
              class="placeholder:text-gray-300"
              v-model="data.lastname"
            />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="email">Correo</Label>
            <Input
              id="email"
              type="email"
              placeholder="correo@correo.com"
              class="placeholder:text-gray-300"
              v-model="data.email"
            />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••••"
              class="placeholder:text-gray-300"
              v-model="data.password"
            />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="password_confirmation">Repite tu contraseña</Label>
            <Input
              id="password_confirmation"
              type="password"
              placeholder="••••••••••"
              class="placeholder:text-gray-300"
              v-model="data.password_confirmation"
            />
          </div>
        </div>
      </form>
    </CardContent>

    <CardFooter class="flex flex-col gap-2">
        <Button 
            @click="handleRegister"
            class="w-full"
        >Crear Cuenta </Button>
    </CardFooter>
  </Card>
</template>
