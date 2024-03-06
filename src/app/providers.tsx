"use client"
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {Components} from "../../components";

export default function Providers({children}: {children : React.ReactNode}
    return(
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
)
