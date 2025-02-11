import { Container } from './container';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { User } from 'lucide-react';
import { ShoppingCart  } from 'lucide-react';
import { Button } from '../ui'
import  {Input} from '../ui';


import * as React from 'react';
interface Props {
    className?: string;
}
export const Header: React.FC<Props> = ({ className }) => (
    <header className={cn('border border-b', className)}>
        <Container className='flex items-center justify-between py-8'>

            
                {/* левая часть если из вас есть придурок */}

              <div className='left flex items-center gap-4 '>
                <div>
                    <Image src = './logo.svg' alt='не прогрузилось, лох, что сказать?' width={35} height={35} />
                </div>
                <div>
                    <h1 className='font-bold'>NEXT PIZZA</h1>
                    <p>Вкучней уже некуда</p>
                </div>
             </div>
            <div>
                <Input type = "text" placeholder = "Пиши сюда если ты слепой" />
                
            
                
            </div>


                {/* Правая часть если из вас есть придурок*/}
                <div className='right flex items-center gap-4' >
                    <Button variant = "outline" >
                    <User size = {16}/>
                        Профиль
                    </Button>

                    <Button variant="outline">
                    <ShoppingCart size={16} />
                    корзинка
                    </Button>

                </div>
            


            

        </Container>
    </header>
);
