export default function Container({children}) { //컴포넌트를 감싸는 컴포넌트
    return (
     <div style={{margin: 20, padding: 20, border: '1px solid black'}}>
        {children}
     </div>
    )
}