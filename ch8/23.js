Date.prototype.getInterval = function (otherDate) {
    // ������ �����մϴ�.
    var interval;

    // ����� ��¥ ������ ���Ϸ��� ���ǹ��� ����մϴ�.
    if (this > otherDate) {
        interval = this.getTime() - otherDate.getTime();
    } else {
        interval = otherDate.getTime() - this.getTime();
    }

    // �����մϴ�.
    return Math.floor(interval / (1000 * 60 * 60 * 24));
};

// ������ �����մϴ�.
var now = new Date();
var before = new Date('December 9, 1991');

// ����մϴ�.
console.log('Interval: ' + now.getInterval(before) + '��');