import { useState } from "react";

export function TestComponent(){
    const [count, SetCount] = useState(0); // useState쓰면 -> 함수가 반환해주는 값은 배열이다. 초기값 0을 넣어줌
                                            //  2번째 값은 뭐냐? 상태를 변화시켜줌
    console.log("test component가 재호출되었습니다.");

    const handleClick = () => {
        SetCount(count+1);
    };

    return (
        <div>
            <div>hello {count}</div>
            <button type="button" onClick={handleClick}>
             INCREMENT
            </button>
        </div>
    );
}