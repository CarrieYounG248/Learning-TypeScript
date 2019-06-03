/*--------类型推断 start-----------*/

let week = 1;
// week = "one";

/*--------类型推断 end-----------*/

/*--------类型断言 start-----------*/
//将一个联合类型的变量指定为一个更加具体的类型
function getLength(something: string | number): number {
    if ((something as string).length) {            //值 as 类型
        // if ((<string>something).length) {           //<类型>值
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}

/*--------类型推断 end-----------*/
