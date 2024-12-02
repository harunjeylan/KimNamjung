import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Icons } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative py-6 flex flex-col justify-between items-center h-full'>
            <nav className='w-full flex flex-col gap-4'>
                <div className='w-[350px] mx-auto flex justify-between items-center '>
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
                <div className='text-muted-foreground font-semibold'>비밀번호를 입력해 주세요</div>
                <div className='w-full flex flex-col gap-4'>
                    <Input placeholder='비밀번호를 입력해 주세요' type='password' className='h-10' />
                    <Input placeholder='비밀번호를 입력해 주세요' type='password' className='h-10' />
                    <div className='text-muted-foreground text-[12px]'>영문, 숫자를 조합해 6-15자리로 입력해 주세요</div>
                </div>
            </div>
            <div className='w-[350px] mx-auto'>
                <Button size={'lg'} variant={'muted'} className='w-full rounded-xl py-6 bg-[#ADADAD] text-white hover:text-primary-foreground hover:bg-primary/90'>다음</Button>
            </div>
        </div>
    )
}
