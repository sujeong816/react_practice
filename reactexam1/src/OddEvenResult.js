export default function OddEvenResult({count}) {
    return (
        <>{count%2==0 ? '짝수' : '홀수'}</>
    )
}