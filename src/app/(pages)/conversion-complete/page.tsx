import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative py-6 flex flex-col h-full'>
            <nav className='w-full flex flex-col gap-4'>
                <div className='w-[350px] mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            포인트 내역
                        </span>
                    </Link>
                </div>
            </nav>
            <div className='w-full h-fit pt-2 px-4'>
                <div className='w-full py-4 text-center space-y-2'>
                    <div className='w-full flex justify-center'>
                        <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="42.8893" cy="42.8903" r="42.1315" fill="rgb(34 197 94 / var(--tw-text-opacity, 1))" />
                            <rect x="21.5" y="33.0029" width="39.5623" height="9.37788" rx="4.68894" transform="rotate(50.5818 21.5 33.0029)" fill="white" />
                            <rect x="69.7422" y="20.7417" width="54.3218" height="9.37788" rx="4.68894" transform="rotate(120 69.7422 20.7417)" fill="white" />
                        </svg>
                    </div>
                    <div className='font-semibold'>
                        <div>1,000</div>
                        <div>포인트 전환 완료</div>
                    </div>
                </div>
                <div className='bg-[#D9D9D95E] w-full rounded-2xl px-6 py-4 space-y-6'>
                    <div className='flex justify-between items-center '>
                        <div>전환된 네이버아이디</div>
                        <div className='font-semibold'>abd*****</div>
                    </div>
                    <div className='flex justify-between items-center '>
                        <div>출석 체크</div>
                        <div className='font-semibold'>+ 100P</div>
                    </div>
                    <div className='flex justify-between items-center '>
                        <div>전환 가능 포인트</div>
                        <div className='text-green-500 font-semibold'>+ 100P</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit px-4 pt space-y-4 mt-8 text-sm text-muted-foreground bg-muted/60 py-4">
                <div>
                    <div className="font-semibold mb-2">알려드립니다.</div>
                    <div>유의사항을 입력해주세요. 유의사항을 입력해주세요</div>
                    <div>유의사항을 입력해주세요. 유의사항을 입력해주세요</div>
                    <div>유의사항을 입력해주세요. 유의사항을 입력해주세요</div>
                    <div>유의사항을 입력해주세요. 유의사항을 입력해주세요</div>

                </div>
            </div>
            <div className='absolute bottom-6 w-full px-4 '>
                <Button variant={'ghost'} className='w-full text-md rounded-2xl shadow-md shadow-black/10 py-6 bg-green-500 hover:text-white text-white hover:bg-green-500 font-semibold shadow-top'>
                    포인트 전환하기
                </Button>
            </div>
        </div>
    )
}
