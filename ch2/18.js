for (let i = 0; i < 3; ++i) {
    // 1��(1000�и� ��) * i ���Ŀ� i�� ���
    setTimeout(() => {
        console.log(i);
    }, 1000 * i);
}