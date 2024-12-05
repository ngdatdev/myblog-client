import Image from "next/image";
import BackGround from '@public/logo.png'
import Link from "next/link";
import { Button } from "antd";
import { ChangeLanguage } from "@/components/common/ChangeLanguage";


export default function Header() {
    return (
        <>
            <div className="h-[74px] w-full px-6 items-center flex flex-row">
                <div className="flex gap-2 justify-center items-center">
                    <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGK4qtqKYgKrbsWalFjub_6fXKI1UZQxsVg&s'} alt="logo" width={100} height={100} className="h-8 w-8 rounded-full" />
                    <h3 className="text-2xl text-[#16f2b3] font-semibold">DAT NGUYEN</h3>
                </div>
                <div className="ml-20 flex gap-4 items-center">
                    <Link href="/" className="group relative inline-block text-[18px] text-white">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-primaryPink">
                            Trang chủ
                        </span>
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primaryPink transition-all duration-400 ease-out group-hover:w-full"></span>
                    </Link>
                    <Link href="/" className="group relative inline-block text-[18px] text-white">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-primaryPink">
                            Blog
                        </span>
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primaryPink transition-all duration-400 ease-out group-hover:w-full"></span>
                    </Link>
                </div>
                <div className="ml-auto flex gap-4">
                    <ChangeLanguage />
                    <Button className="bg-gradient-to-r vie-indigo-500 from-purple-500 to-pink-500 border-none text-[16px] m-auto text-center py-[18px] font-semibold">Đăng nhập</Button>
                </div>
            </div>
        </>
    );
}