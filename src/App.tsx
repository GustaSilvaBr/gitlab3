import './styles/global.css';
import { clsx } from 'clsx';

import { Logo } from './Logo';
import {Envelope, Lock} from 'phosphor-react';


import { Heading } from './components/Heading';
import { Text } from './components/Text';
import {TextInput} from './components/TextInput';
import {Checkbox} from './components/Checkbox';
import {Button} from './components/Button';

export function App() {
  const styles = {
    form:{
      container:'flex w-96 flex-col items-center justify-center gap-6',
      group:{
        row:'flex w-full items-center justify-start gap-3',
        col:'flex w-full items-start justify-center gap-3 flex-col'
      }
    }
  }


  return (
    <div className={clsx(
      'w-screen h-screen bg-gray-900 flex items-center justify-center flex-col',
      'text-gray-100 gap-8'
    )}>
      <div className="flex justify-center items-center gap-2 flex-col">
        <Logo />
        <Heading size="lg">
          Ignite Lab
        </Heading>
        <Text size="lg" color="text-gray-400">
          Faça login e comece a usar!
        </Text>
      </div>
      <form className={styles.form.container}>

        <div className={styles.form.group.col}>
          <Text>
            <label htmlFor="email-login">Endereço de e-mail</label>
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>
            <TextInput.Input id="email-login" placeholder="John.doe@example.com"/>
          </TextInput.Root>
        </div>

        <div className={styles.form.group.col}>
          <Text>
            <label htmlFor="password-login">Sua senha</label>
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>
            <TextInput.Input id="password-login" type="password" placeholder="**********"/>
          </TextInput.Root>
        </div>

        <div className={styles.form.group.row}> 
          <Checkbox id="remember-sign"/>
          <Text>
            <label htmlFor="remember-sign">Lembrar de mim por 30 dias</label>
          </Text>
        </div>

        
        <Button>
          <input type="submit" value="Entrar na plataforma"/>
        </Button>
        
      </form>

      <div className="flex flex-col w-full justify-center items-center gap-3">
        <Text size="sm" color="text-gray-200">
          <a href="" className="underline">Esqueceu sua senha?</a>
        </Text>
        <Text size="sm" color="text-gray-200">
          <a href="" className="underline">Não possui conta? Crie uma agora!</a>
        </Text>
      </div>
    </div>
  )
}


