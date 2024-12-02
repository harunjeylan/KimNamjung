import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { Icons } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import { DialogTitle } from '@radix-ui/react-dialog'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative py-6 flex flex-col justify-between items-center h-full'>
            <nav className='w-full flex flex-col gap-4'>
                <div className='w-[350px] mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            아이디 찾기
                        </span>
                    </Link>
                </div>
                <Separator />
            </nav>
            <div className='absolute top-1/3 w-[350px]'>
                <div className=' mx-auto  h-full flex flex-col gap-4 items-center justify-between'>
                    <Icons.success className='size-16' />
                    <div className='text-muted-foreground max-w-[200px] text-sm text-center'>
                        회원님의 아이디(이메일)는
                        <span className='text-[#8268FD]'>abc123@aaa.com</span> 입니다
                    </div>
                    <div className='text-muted-foreground/50 max-w-[200px] text-[10px] text-center'>가입일 : 2023.11.01</div>
                </div>
            </div>
            <div className='w-[350px] mx-auto absolute bottom-4'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size={'lg'} className='w-full rounded-2xl'>사진 등록</Button>
                    </DialogTrigger>
                    <DialogContent className='w-fit max-w-[90%] overflow-hidden rounded-2xl'>
                        <div className='pt-6 pb-2 space-y-4 flex flex-col justify-center items-center '>
                            <Icons.warning fill={'#DCDCDC'} className='size-20' />
                            <DialogTitle className='max-w-[240px] text-center'>
                                개인정보 보호를 위해 본인 인증 후
                                비밀번호를 찾을 수 있습니다.
                            </DialogTitle>
                            <div className='flex gap-4'>
                                <Button size={'lg'} className='w-36 bg-primary/10 text-primary shadow hover:bg-primary/15'>취소</Button>
                                <Button size={'lg'} className='w-36'>본인 인증</Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
