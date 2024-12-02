import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative py-6 flex flex-col justify-between items-center h-full'>
            <nav className='w-full flex flex-col gap-4'>
                <div className='w-[350px] mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            공지사항
                        </span>
                    </Link>
                </div>
            </nav>
            <div className='w-full h-full pt-2 px-4 mt-4 space-y-4'>
                <div className='flex flex-col divide-y'>
                    <div className='flex justify-between items-center '>
                        <div className='space-y-1 py-2'>
                            <div>공지사항3 제목 텍스트 영역</div>
                            <div className='text-muted-foreground text-[12px]'>2024.08.01</div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center '>
                        <div className='space-y-1 py-2'>
                            <div className='max-w-[180px]'>
                                안녕하세요, 데일리밥 입니다.
                                내용 텍스트 영역
                                감사합니다.
                            </div>
                            <Image src={'/images/phone.jpeg'} alt="phone" width={400} height={400} className='rounded-xl object-cover' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
