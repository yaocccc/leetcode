import { ListNode, LinkedList } from './common/NodeList';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let node = new ListNode(0);
    let root = node;
    let carry = 0;

    while (l1 || l2 || carry) {
        let x1 = 0, x2 = 0;

        if (l1) x1 = l1.val, l1 = l1.next;
        if (l2) x2 = l2.val, l2 = l2.next;

        let current = x1 + x2 + carry;
        carry = current >= 10 ? 1 : 0;

        node.next = new ListNode(current % 10);
        node = node.next;
    }

    return root.next;
};

const l1 = new LinkedList<number>(1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1);
const l2 = new LinkedList<number>(5, 6, 4);
console.log(addTwoNumbers(l1.get(), l2.get()));
