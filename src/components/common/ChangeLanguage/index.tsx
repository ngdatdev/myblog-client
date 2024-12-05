import { Dropdown, MenuProps } from "antd";
import { t } from "i18next";
import Image from "next/image";
export function ChangeLanguage() {
    const handleClick: MenuProps['onClick'] = (e) => {
        // startTransition(() => {
        //     router.replace(`/${e?.key}/${getPathname(pathname)}`)
        // })
    }

    const languagesItems: MenuProps['items'] = [
        {
            key: 'vi',
            label: (
                <div className="flex flex-row gap-4">
                    <div className="h-[26px] w-[40px]">
                        <Image
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"}
                            alt="vn_flag"
                            width={400}
                            height={400}
                            className={
                                'h-[26px] w-[40px] rounded-md object-cover'
                            }
                        />
                    </div>
                    <div>{t("header_vietnamese")}</div>
                </div>
            ),
        },
        {
            key: 'en',
            label: (
                <div className="flex flex-row gap-4">
                    <div className="h-[26px] w-[40px]">
                        <Image
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"}
                            alt="us_flag"
                            width={400}
                            height={400}
                            className={
                                'h-[26px] w-[40px] rounded-md object-cover'
                            }
                        />
                    </div>
                    <div>{t("header_english")}</div>
                </div>
            ),
        },
    ]
    
    return (
        <Dropdown
            menu={{ items: languagesItems, 
                onClick: handleClick
             }}
            placement="bottom"
            trigger={['click']}
        >
            <div
                className="flex items-center justify-center gap-2 hover:cursor-pointer"
                onClick={(e) => {
                    // e.preventDefault()
                    // setIsTriger(!isTriger)
                }}
            >
                <div>
                    <Image
                        // src={localActive == 'vi' ? VietNamFlag : UKFlag}
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"}
                        alt="flag"
                        width={400}
                        height={400}
                        className="h-[32px] w-[32px] rounded-full object-cover"
                    />
                </div>
               
            </div>
        </Dropdown>
    )
}