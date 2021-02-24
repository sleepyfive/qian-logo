import { readonly } from "vue";
import { IPropsStyle } from "../@types/style";

export function parseNumber(style:string):number{
    return Number.parseInt(style);
}
export function parseUnit(style:string):string{
    return style.substring(parseNumber(style).toString().length);
}

export function getStyle(props:IPropsStyle={},defaultValue:IPropsStyle={}){
    const {width,height} = props;
    //! buggy 这个地方应该不能使用百分比
    const style = readonly({
        width:{
            num: parseNumber(width||defaultValue.width||'8vw'),
            unit: parseUnit(width||defaultValue.width||'8vw')
        },
        height:{
            num: parseNumber(height||defaultValue.height||'2vw'),
            unit: parseUnit(height||defaultValue.height||'2vw')
        }
    });

    return style;
}