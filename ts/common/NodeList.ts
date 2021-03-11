export class ListNode<T = number> {
    val: T;
    next: ListNode<T> | null;

    constructor(val? : T, next? : ListNode<T> | null) {
        this.val = val === undefined ? val : val;
        this.next = next === undefined ? null : next;
    }

    public toArray(): T[] {
        let res: T[] = [];
        for (let current: ListNode<T> = this; current; current = current.next) {
            res.push(current.val);
        }
        return res;
    };
}

export class LinkedList<T = number> {
    private head: ListNode<T> | null = null;
    public length: number = 0;
    
    constructor(...vals: T[]) {
        this.push(...vals);
    };

    public getNode(index: number): ListNode<T> {
        if (index >= this.length || index < 0) throw new Error(`ERROR: ${index} 超出索引范围!`);
        let current = this.head;
        while(index-- && current) {
            current = current.next;
        }
        return current;
    };
    
    public get(): ListNode<T> {
        return this.head;
    };

    public indexOf(val: T): number {
        for (let current = this.head, index = 0; current; current = current.next, index++) {
            if (current.val === val) {
                return index;
            }
        }
        return -1;
    };

    public includes(val: T): boolean {
        for (let current = this.head; current; current = current.next) {
            if (current.val === val) {
                return true;
            }
        }
        return false;
    };

    public map<U>(callbackfn: (val?: T, index?: number, array?: T[]) => U): U[] {
        const arr = this.toArray();
        const res: any[] = [];
        for (let current = this.head, index = 0; current; current = current.next, index++) {
            res.push(callbackfn(current.val, index, arr))
        }
        return res;
    };

    public find(callbackfn: (val?: T, index?: number, array?: T[]) => boolean): T | undefined {
        const arr = this.toArray();
        for (let current = this.head, index = 0; current; current = current.next, index++) {
            if (callbackfn(current.val, index, arr)) {
                return current.val;
            }
        }
        return undefined;
    };

    public filter(callbackfn: (val?: T, index?: number, array?: T[]) => boolean): T[] {
        const arr = this.toArray();
        const res: T[] = [];
        for (let current = this.head, index = 0; current; current = current.next, index++) {
            if (callbackfn(current.val, index, arr)) {
                res.push(current.val);
            }
        }
        return res;
    };

    public every(callbackfn: (val?: T, index?: number, array?: T[]) => boolean): boolean {
        const arr = this.toArray();
        for (let current = this.head, index = 0; current; current = current.next, index++) {
            if (!callbackfn(current.val, index, arr)) {
                return false;
            }
        }
        return true;
    };

    public some(callbackfn: (val?: T, index?: number, array?: T[]) => boolean): boolean {
        const arr = this.toArray();
        for (let current = this.head, index = 0; current; current = current.next, index++) {
            if (callbackfn(current.val, index, arr)) {
                return true;
            }
        }
        return false;
    };

    public forEach(callbackfn: (val?: T, index?: number, array?: T[]) => void): void {
        const arr = this.toArray();
        for (let current = this.head, index = 0; current; current = current.next, index++) {
            callbackfn(current.val, index, arr);
        }
    };

    public reduce<U>(callbackfn: (previousValue?: U, currentValue?: T, currentIndex?: number, array?: T[]) => U, initialValue: U): U {
        const arr = this.toArray();
        let targetValue = initialValue;
        for (let current = this.head, index = 0; current; current = current.next, index++) {
            targetValue = callbackfn(targetValue, current.val, index, arr);
        }
        return targetValue;
    };

    public reverse(): this {
        let head = this.head;
        if (!head || !head.next) return this;

        let newHead = null;
        while(head) {
            let temp = head.next;
            head.next = newHead;
            newHead = head;
            head = temp;
        }
        this.head = newHead;
        return this;
    };

    public slice(start?: number, end?: number): ListNode<T> {
        start = start < 0 ? this.length + start : start;
        end = end < 0 ? this.length + end : end;

        if (start !== undefined && start > this.length - 1) return null;
        if (end !== undefined && end <= 0) return null;

        let head = this.getNode(start >= 0 ? start : 0);
        let res = head;
        for (let i = (end || this.length) - (start >= 0 ? start : 0); i > 1; i--) {
            head = head.next;
        }
        if (head) head.next = null;
        return res;
    };

    // TODO
    public splice(start?: number, end?: number): this {
        this.head = this.slice(start, end);
        this.length = 0;
        let current = this.head;
        while(current) {
            current = current.next;
            this.length++;
        }
        return this;
    };

    public concat(...listNodes: ListNode<T>[]): ListNode<T> {
        let current = this.head;
        let res = current;
        while(current.next) {
            current = current.next;
        }
        listNodes.forEach(listNode => {
            while (listNode) {
                current.next = listNode;
                listNode = listNode.next;
                current = current.next;
            }
        });
        return res;
    };

    public sort(compareFn?: (a: T, b: T) => number): this {
        const arr = this.toArray();
        arr.sort(compareFn);
        this.head = null;
        this.length = 0;
        this.push(...arr);
        return this;
    };

    public pop(): T {
        try {
            let tailPre = this.getNode(this.length - 2);
            const val = tailPre.next.val;
            tailPre.next = null;
            this.length--;
            return val;
        } catch (e) {
            if (this.head) {
                const res = this.head.val;
                this.head = null;
                this.length--;
                return res;
            }
        }
    };

    public shift(): T {
        try {
            const res = this.head.val;
            this.head = this.getNode(1);
            this.length--;
            return res;
        } catch (e) {
            if (this.head) {
                const res = this.head.val;
                this.head = null;
                this.length--;
                return res;
            }
        }
    };

    public push(...vals: T[]): void {
        vals.forEach(val => {
            let newNode = new ListNode<T>(val);
            if (this.length === 0) {
                this.head = newNode;
            } else {
                let tail = this.getNode(this.length - 1);
                tail.next = newNode;
            }
            this.length++;
        });
    };

    public unshift(val: T): void {
        let newNode = new ListNode<T>(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    };

    public insert(index: number, val: T): void {
        if (index === 0) {
            this.unshift(val);
        } else {
            let newNode = new ListNode<T>(val);
            let head = this.getNode(--index);
            newNode.next = head.next;
            head.next = newNode;
            this.length++;
        }
    };

    public toArray(): T[] {
        let res: T[] = [];
        for (let current = this.head; current; current = current.next) {
            res.push(current.val);
        }
        return res;
    };
}
