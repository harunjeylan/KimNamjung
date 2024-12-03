import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Icons } from '@/components/ui/icons'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
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
            <ScrollArea className='w-full h-[calc(100vh-14rem)] relative overflow-y-auto'>
                <div className='w-full h-full pt-4 px-4 space-y-4'>
                    <div className='text-muted-foreground font-semibold'>이용약관에 동의해 주세요</div>
                    <div className='w-full flex flex-col gap-4'>
                        <div className='flex gap-2 items-center'>
                            <Checkbox className='size-5 rounded border-muted data-[state=checked]:bg-black data-[state=checked]:text-muted-foreground' />
                            <span className='w-full text-muted-foreground'>전체 동의</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Checkbox className='size-5 rounded border-muted data-[state=checked]:text-muted-foreground' />
                            <span className='w-full text-muted-foreground'>만 14세 이상입니다(필수)</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Checkbox className='size-5 rounded border-muted data-[state=checked]:text-muted-foreground' />
                            <span className='w-full text-muted-foreground'>이용약관 동의(필수)</span>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.58073 13.8334L10.4141 8.00002L4.58073 2.16669" stroke="#ADADAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Checkbox className='size-5 rounded border-muted data-[state=checked]:text-muted-foreground' />
                            <span className='w-full text-muted-foreground'>개인정보처리방침 동의(필수)</span>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.58073 13.8334L10.4141 8.00002L4.58073 2.16669" stroke="#ADADAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Checkbox className='size-5 rounded border-muted data-[state=checked]:text-muted-foreground' />
                            <span className='w-full text-muted-foreground'>마케팅 활용 동의(선택)</span>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.58073 13.8334L10.4141 8.00002L4.58073 2.16669" stroke="#ADADAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <ScrollBar className="w-0.5" />
            </ScrollArea>
            <div className='w-full px-4 mx-auto'>
                <Button size={'lg'} variant={'muted'} className={cn('w-full rounded-xl py-6', 'bg-[#ADADAD] text-white ', ' hover:text-primary-foreground hover:bg-primary/90 bg-primary')}>다음</Button>
            </div>
        </div>
    )
}
