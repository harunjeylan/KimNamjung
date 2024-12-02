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
                    </Link>
                </div>
                <Separator />
            </nav>
            <div className='w-full h-full pt-2 px-4'>
                <div className='w-full aspect-square flex flex-col gap-2 justify-center items-center text-center'>
                    <Image
                        src="/images/Starbucks.png"
                        alt="Starbucks"
                        width={280}
                        height={280}
                        className="h-[216px] w-[216px] object-cover"
                    />
                    <div>
                        <div>아이스 아메리카노</div>
                        <span className='text-muted-foreground'>스타벅스</span>
                    </div>
                    <div className='flex gap-1 justify-center items-center'>
                        <Icons.currency fill={"hsl(var(--primary))"} className="size-6" />
                        <div className="">300 P</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full px-4 space-y-4 text-sm text-muted-foreground bg-muted/60 py-4">
                <div>
                    <h2 className="font-semibold mb-2">▶ 사용장소</h2>
                    <p>- 롯데리아 국내 전 매장</p>
                    <p className="text-xs">
                        (단, 공항, 리조트 및 휴게소, 위락시설 주변매장 등 특수매장 및 일부점포 제외)
                    </p>
                    <p>- 배달, 픽업사용 불가</p>
                </div>

                <div>
                    <h2 className="font-semibold mb-2">▶ 유의사항</h2>
                    <ol className="list-decimal list-inside space-y-1">
                        <li>본 상품은 매장 재고 상황에 따라 동일상품으로 교환이 불가능할 수 있습니다.</li>
                        <li>해당 상품의 타 상품으로 교환 불가 합니다.</li>
                        <li>본 쿠폰 교환 시 L.POINT 적립 및 현금영수증 발행 가능 합니다.</li>
                        <li>타 행사와 중복적용은 브랜드사 정책에 따릅니다.</li>
                        <li>유효기간 이내 사용 가능합니다.</li>
                        <li>매장 방문 주문 시에만 사용 가능 합니다.</li>
                    </ol>
                </div>
            </div>
            <div className="absolute w-full bottom-8 flex justify-center px-4 ">
                <Button className="w-full py-6 text-lg">
                    구매하기
                </Button>
            </div>
        </div>
    )
}
