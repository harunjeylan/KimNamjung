import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
export default function Page() {
    return (
        <div className='pt-6 flex flex-col justify-between items-center h-full'>

            <ScrollArea className='h-[calc(100vh-1px)] w-full relative overflow-y-auto'>
                <div className='w-full px-4 py-2'>
                    <div className='mx-auto w-[80px] h-[180px] aspect-square flex flex-col gap-2 items-center justify-end'>
                        <Image src={'/images/logo2.png'} width={100} height={100} alt='logo2' className='w-full' />
                    </div>
                    <form className='w-full flex flex-col gap-2 py-10'>
                        <Input placeholder='아이디를 입력해 주세요' className='h-10' />
                        <Input placeholder='비밀번호를 입력해 주세요' className='h-10' />
                        <Button size={'lg'} className='w-full rounded-lg'>로그인</Button>
                        <div className='flex justify-center items-center gap-4 w-full text-center text-muted-foreground text-sm'>
                            <span>아이디 찾기</span>
                            <span className='bg-black size-1' />
                            <span>아이디 찾기</span>
                        </div>
                    </form>
                    <Separator />
                    <div className='w-full flex flex-col items-center justify-center gap-4 '>
                        <div className='py-10 flex justify-center w-full'>
                            <div className='max-w-48 text-sm text-muted-foreground'>데일리밥에 가입하지 않으셨다면, 간단히 가입후에 이용해 보세요!</div>
                        </div>
                        <Link href={'/#'} className='w-full rounded-md py-2 bg-yellow-400 flex items-center px-4'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.2071 4.41666C23.5721 4.41666 29.5417 9.06936 29.5417 14.8103C29.5417 20.55 23.5721 25.2027 16.2083 25.2027C15.4751 25.2014 14.7427 25.1547 14.0153 25.063L8.41786 28.724C7.78167 29.0605 7.5569 29.0236 7.81849 28.1995L8.95119 23.529C5.29405 21.6751 2.875 18.4624 2.875 14.8103C2.875 9.07063 8.84198 4.41666 16.2071 4.41666Z" fill="black" />
                            </svg>
                            <div className='w-full text-center'>카카오 로그인</div>
                        </Link >
                        <Link href={'/#'} className='w-full rounded-md py-2 bg-green-500 flex items-center px-4'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5702 16.6116L12.1488 6H6V25.8347H12.4463V15.2231L19.8512 25.8347H26V6H19.5702V16.6116Z" fill="white" />
                            </svg>
                            <div className='w-full text-center'>Apple 로그인</div>
                        </Link >
                        <Link href={'/#'} className='w-full rounded-md py-2 bg-black flex items-center px-4 text-white'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.8473 26.0371C21.5408 27.3036 20.1143 27.1036 18.7412 26.5037C17.288 25.8904 15.9548 25.8638 14.4217 26.5037C12.5019 27.3303 11.4887 27.0903 10.3422 26.0371C3.83638 19.3313 4.79626 9.11923 12.182 8.74594C13.9818 8.83926 15.2349 9.73248 16.2881 9.81247C17.8613 9.49251 19.3678 8.57263 21.0475 8.69261C23.0606 8.85259 24.5804 9.65249 25.5803 11.0923C21.4208 13.5853 22.4074 19.0646 26.2202 20.5978C25.4603 22.5975 24.4738 24.5839 22.834 26.0504L22.8473 26.0371ZM16.1548 8.66595C15.9548 5.69299 18.3679 3.23997 21.1409 3C21.5275 6.43957 18.0213 8.99924 16.1548 8.66595Z" fill="white" />
                            </svg>
                            <div className='w-full text-center'>이메일 회원가입</div>
                        </Link >
                        <Link href={'/#'} className='w-full rounded-md py-3 bg-[#DCDCDC] flex items-center px-4 text-muted-foreground'>
                            <svg width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3307 7.01746V14.905C18.3308 15.5426 18.0871 16.1562 17.6497 16.6202C17.2122 17.0841 16.614 17.3634 15.9774 17.4008L15.8307 17.405H4.16406C3.52639 17.405 2.9128 17.1614 2.44885 16.7239C1.98489 16.2864 1.70564 15.6882 1.66823 15.0516L1.66406 14.905V7.01746L9.5349 12.265L9.63156 12.32C9.74548 12.3756 9.8706 12.4046 9.9974 12.4046C10.1242 12.4046 10.2493 12.3756 10.3632 12.32L10.4599 12.265L18.3307 7.01746Z" fill="#4D4D4D" />
                                <path d="M15.8271 4.07162C16.7271 4.07162 17.5163 4.54662 17.9563 5.26079L9.99375 10.5691L2.03125 5.26079C2.24024 4.92148 2.52733 4.63704 2.86856 4.4312C3.20979 4.22536 3.59529 4.10407 3.99292 4.07746L4.16042 4.07162H15.8271Z" fill="#4D4D4D" />
                            </svg>
                            <div className='w-full text-center'>이메일 회원가입</div>
                        </Link >
                    </div>
                </div>
                <ScrollBar className="w-0.5" />
            </ScrollArea>
        </div>
    )
}
