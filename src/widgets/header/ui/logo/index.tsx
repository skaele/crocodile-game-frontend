import React from 'react'
import logo from '@shared/icons/logo.png'

const Logo = () => {
    return (
        <div className="h-full w-40 flex f-row items-center gap-3">
            {/* <LogoIcon height={38} /> */}
            <img src={logo} height={42} width={42} alt="logo" />
            <span className="font-medium text-xl">Крокодил</span>
        </div>
    )
}

export default Logo
