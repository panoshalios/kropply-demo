import { mergeSort } from "../mergesort"

describe("mergesort", () => {
    test("sorts an array of numbers", () => {
        const arr = [5, 3, 8, 4, 2, 1, 6, 7]
        const sortedArr = mergeSort(arr)

        expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
    })
})
