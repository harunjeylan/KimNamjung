import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import Link from 'next/link'


export default function Page() {

    return (
        <div className='h-full space-y-4 pt-4'>
            <nav className='w-full flex flex-col gap-4'>
                <div className='w-[350px] mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            친구 초대
                        </span>
                    </Link>
                </div>
                <Separator />
            </nav>
            <div className='w-full px-4 space-y-4'>
                <div className='w-full font-semibold'>
                    하루 3문제, 데일리 퀴즈에 도전하세요!
                </div>
                <div className="flex flex-col gap-4 px-4">
                    <div className="flex flex-col gap-4 px-4">
                        <div className='w-full flex gap-1 text-muted-foreground'>
                            <span>1.</span><span>일반 퀴즈 입니다. 일반 퀴즈 입니다. 일반 퀴즈 입니다. 일반 퀴즈 입니다.</span>
                        </div>
                        <div className='w-full px-4 space-y-2'>
                            <Button variant="outline" className={cn('bg-primary/10 hover:bg-primary/15 border-primary w-full justify-start text-start text-muted-foreground')}>
                                항목1
                            </Button>
                            <Button variant="outline" className="w-full justify-start text-start">
                                항목2
                            </Button>
                            <Button variant="outline" className="w-full justify-start text-start">
                                항목3
                            </Button>
                            <Button variant="outline" className="w-full justify-start text-start">
                                항목4
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 px-4">
                        <div className='w-full flex gap-1 text-muted-foreground'>
                            <span>1.</span><span>일반 퀴즈 입니다. 일반 퀴즈 입니다. 일반 퀴즈 입니다. 일반 퀴즈 입니다.</span>
                        </div>
                        <div className='w-full px-4 space-y-2'>
                            <Button variant="outline" className={cn('bg-primary/10 hover:bg-primary/15 border-primary w-full justify-start text-start text-muted-foreground')}>
                                항목1
                            </Button>
                            <Button variant="outline" className="w-full justify-start text-start">
                                항목2
                            </Button>
                            <Button variant="outline" className="w-full justify-start text-start text-primary">
                                항목3
                            </Button>
                            <Button variant="outline" className="w-full justify-start text-start">
                                항목4
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute w-full px-4 bottom-4'>
                <Button className='w-full py-5'>다음</Button>
            </div>
        </div>
    )
}


