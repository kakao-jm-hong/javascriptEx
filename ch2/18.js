for (let i = 0; i < 3; ++i) {
    // 1초(1000밀리 초) * i 초후에 i를 출력
    setTimeout(() => {
        console.log(i);
    }, 1000 * i);
}