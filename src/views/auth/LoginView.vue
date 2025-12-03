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
  email: '',
  password: '',
})

const handleLogin = () => {
  console.log('Login data:', data)
}
</script>

<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Ingresa a tu cuenta</CardTitle>
      <CardDescription> Ingresa tu correo y contraseña </CardDescription>
    </CardHeader>

    <CardContent>
      <form>
        <div class="grid w-full items-center gap-4">
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
        </div>
      </form>
    </CardContent>

    <CardFooter class="flex flex-col gap-2">
        <Button
            @click="handleLogin"
            class="w-full"
        > Login </Button>
    </CardFooter>
  </Card>
</template>
