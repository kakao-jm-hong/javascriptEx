var input = Number(prompt('please number in box', 'number'));

switch (input % 2) {
    case 0:
        console.log('¦���Դϴ�.');
        break;
    case 1:
        console.log('Ȧ���Դϴ�.');
        break;
    default:
        console.log('���ڰ� �ƴմϴ�.');
        break;
}