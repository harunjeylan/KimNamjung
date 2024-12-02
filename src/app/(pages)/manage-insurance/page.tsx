import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import Image from 'next/image'
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
                <div className='flex flex-col gap-4'>
                    <div className="w-full px-4 py-4 rounded-2xl shadow-lg shadow-black/10 flex gap-4 items-center">
                        <div className="h-[92px] aspect-square bg-[#FFD8D8] rounded-xl" />
                        <div className='w-full flex flex-col gap-1 pe-4'>
                            <div className='text-sm'>교보용종케어보험(무배당)</div>
                            <div className='text-[12px] text-primary'>신청 완료</div>
                            <div className='text-[10px] text-muted-foreground/60'>홍길동(01011111234)</div>
                            <div className='w-full flex justify-between'>
                                <Button size={'sm'} className='rounded-full h-6 px-4'>자세히 보기</Button>
                                <span className='text-blue-500 underline'>보험 취소</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 py-4 rounded-2xl shadow-lg shadow-black/10 flex gap-4 items-center">
                        <div className="h-[92px] aspect-square bg-[#FFD8D8] rounded-xl" />
                        <div className='w-full flex flex-col gap-1 pe-4'>
                            <div className='text-sm'>교보용종케어보험(무배당)</div>
                            <div className='text-[12px] text-primary'>신청 완료</div>
                            <div className='text-[10px] text-muted-foreground/60'>홍길동(01011111234)</div>
                            <div className='w-full flex justify-between'>
                                <Button size={'sm'} className='rounded-full h-6 px-4'>자세히 보기</Button>
                                {/* <span className='text-blue-500 underline'>보험 취소</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 py-4 rounded-2xl shadow-lg shadow-black/10 flex gap-4 items-center">
                        <div className="h-[92px] aspect-square bg-[#FFD8D8] rounded-xl" />
                        <div className='w-full flex flex-col gap-1 pe-4'>
                            <div className='text-sm'>교보용종케어보험(무배당)</div>
                            <div className='text-[12px] text-primary'>신청 완료</div>
                            <div className='text-[10px] text-muted-foreground/60'>홍길동(01011111234)</div>
                            <div className='w-full flex justify-between'>
                                <Button size={'sm'} className='rounded-full h-6 px-4'>자세히 보기</Button>
                                {/* <span className='text-blue-500 underline'>보험 취소</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute w-full px-4 bottom-4'>
                <Button className='w-full py-7 rounded-2xl'>확인</Button>
            </div>
        </div>
    )
}

