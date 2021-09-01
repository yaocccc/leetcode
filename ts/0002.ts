/*
 *  困难 两数相加
 *  给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 *  请你将两个数相加，并以相同形式返回一个表示和的链表。
 *  你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */
import { LinkedList, ListNode } from './common/NodeList';

const f1 = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    const resultListNode = new ListNode();
    let tempNode = resultListNode;
    let addFlag = 0;

    while (tempNode) {
        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);

        tempNode.val = v1 + v2 + addFlag;
        if (tempNode.val >= 10) {
            tempNode.val -= 10;
            addFlag = 1;
        } else addFlag = 0;

        if (l1 || l2 || addFlag) {
            tempNode.next = new ListNode();
            tempNode = tempNode.next;
        } else {
            tempNode = null;
        }
    }

    return resultListNode;
};

const tests = [
    {
        l1: new LinkedList(...[2, 4, 3]).get(),
        l2: new LinkedList(...[5, 6, 4]).get(),
        result: new LinkedList(...[7, 0, 8]).get(),
    },
    {
        l1: new LinkedList(...[0]).get(),
        l2: new LinkedList(...[0]).get(),
        result: new LinkedList(...[0]).get(),
    },
    {
        l1: new LinkedList(...[9, 9, 9, 9, 9, 9, 9]).get(),
        l2: new LinkedList(...[9, 9, 9, 9]).get(),
        result: new LinkedList(...[8, 9, 9, 9, 0, 0, 0, 1]).get(),
    },
];

import { assert } from './test';
console.log(tests.every((test) => assert(f1(test.l1, test.l2), test.result)));
