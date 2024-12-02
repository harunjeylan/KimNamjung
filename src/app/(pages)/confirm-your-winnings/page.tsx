import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Icons } from '@/components/ui/icons'
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
            <div className='w-full h-full pt-6 px-4 space-y-4'>
                <div className='w-full h-[97px] bg-[#FFD8D8] rounded-xl'>
                </div>
                <div className='w-full flex flex-col gap-6'>
                    <div className='flex gap-2 items-center justify-between'>
                        <div className='text-muted-foreground/60'>당첨 선물</div>
                        <div className='text-muted-foreground text-end'>브리지스톤 B2 드라이버</div>
                    </div>
                    <div className='flex gap-2 items-center justify-between'>
                        <div className='text-muted-foreground/60'>입금 가격</div>
                        <div className='text-muted-foreground text-end'>25,000원</div>
                    </div>
                    <div className='flex gap-2 items-center justify-between'>
                        <div className='text-muted-foreground/60'>제세공과금</div>
                        <div className='text-muted-foreground text-end'>5,000원</div>
                    </div>
                    <div className='flex gap-2 items-center justify-between'>
                        <div className='text-muted-foreground/60'>이름</div>
                        <div className='text-muted-foreground text-end'>홍길동</div>
                    </div>
                    <div className='flex gap-2 items-center justify-between'>
                        <div className='text-muted-foreground/60'>휴대폰번호</div>
                        <div className='text-muted-foreground text-end'>010-1111-2222</div>
                    </div>
                    <div className='flex gap-2 items-center justify-between'>
                        <div className='text-muted-foreground/60'>주소</div>
                        <div className='text-muted-foreground text-end max-w-[180px]'>
                            서울특별시 금천구 ㅇㅇ로 ㅇㅇ
                            건물 이름 ㅇㅇㅇ호
                            <span className='text-blue-400 text-[12px] block'>정보 수정</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-full flex flex-col justify-center items-center text-center space-y-4'>
                <div className='text-muted-foreground/60 max-w-[200px]'>
                    데일리밥 입금 계좌
                </div>
                <div className='text-muted-foreground max-w-[200px]'>
                    기업은행 111-111111-11-111 (주)정감
                </div>
            </div>
            <div className='w-[350px] mx-auto'>
                <Button size={'lg'} variant={'muted'} className='w-full rounded-xl py-6 bg-[#ADADAD] text-white hover:text-primary-foreground hover:bg-primary/90'>다음</Button>
            </div>
        </div>
    )
}
