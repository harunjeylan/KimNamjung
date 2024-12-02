import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'


export default function Page() {
    const products = [1, 2, 3, 4, 5, 6]
    return (
        <div className='h-full space-y-4 pt-4'>
            <nav className='w-full flex flex-col gap-4'>
                <div className='w-[350px] mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            내 보험 관리
                        </span>
                    </Link>
                </div>
                <Separator />
            </nav>
            <div className='w-full px-4 space-y-4'>
                <div className='w-full py-6 flex flex-col gap-2 justify-center items-center'>
                    <div className="h-[240px] aspect-square bg-[#FFD8D8] rounded-xl" />
                </div>
            </div>
            <Separator className='h-2 bg-border/40' />
            <div className='w-full h-full px-4 divide-y'>
                <div className='flex flex-col py-2 space-y-1'>
                    <div className=''>신청보험명</div>
                    <div className='text-muted-foreground'>교보용종케어보험(무배당)[D]</div>
                </div>
                <div className='flex flex-col py-2 space-y-1'>
                    <div className=''>가입자명</div>
                    <div className='text-muted-foreground'>홍길동</div>
                </div>
                <div className='flex flex-col py-2 space-y-1'>
                    <div className=''>연락처</div>
                    <div className='text-muted-foreground'>010-1111-1111</div>
                </div>
                <div className='flex flex-col py-2 space-y-1'>
                    <div className=''>보험가입 성공여부</div>
                    <div className='text-muted-foreground'>신청 완료</div>
                </div>
                <div className='flex flex-col py-2 space-y-1'>
                    <div className=''>보험만기일(청약 철회일)</div>
                    <div className='text-muted-foreground'>2029-01-01</div>
                </div>
                <div className='flex flex-col py-2 space-y-1'>
                    <div className=''>가입 상태</div>
                    <div className='text-muted-foreground'>가입 중</div>
                </div>
                <Separator className='h-0 bg-border/40' />
            </div>
            <div className='absolute w-full px-4 bottom-4'>
                <Button className='w-full py-7 rounded-2xl'>확인</Button>
            </div>
        </div>
    )
}


