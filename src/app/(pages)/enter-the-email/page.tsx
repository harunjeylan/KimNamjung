import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative py-6 flex flex-col justify-between items-center h-full'>
            <nav className='w-full flex flex-col gap-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            회원가입
                        </span>
                    </Link>
                </div>
                <Separator />
            </nav>
            <div className='w-full h-full pt-4 px-4 space-y-4'>
                <div className='text-muted-foreground font-semibold'>아이디로 사용할 이메일을 입력해 주세요</div>
                <div className='w-full flex flex-col gap-4'>
                    <Input placeholder='이메일을 입력해 주세요' type='email' className='h-10' />
                </div>
            </div>
            <div className='w-full px-4 mx-auto'>
                <Button size={'lg'} variant={'muted'} className={cn('w-full rounded-xl py-6', 'bg-[#ADADAD] text-white ', ' hover:text-primary-foreground hover:bg-primary/90 bg-primary')}>다음</Button>
            </div>
        </div>
    )
}
