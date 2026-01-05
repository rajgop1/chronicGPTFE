import React from 'react'
import { cn } from '../../helpers/utils'

function ResponsiveSection({className, children}) {
  return (
    <div className={cn(className, "p-[10px] md:p-[20px] lg:p-[40px] 3xl:p-[60px]")}>
        {children}
    </div>
  )
}

export default ResponsiveSection