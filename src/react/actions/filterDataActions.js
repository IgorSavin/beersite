export const filterData =(arr, first,second)=>(
    {
        type: 'FILTER_DATA',
        dataArr: arr,
        firstParam:first,
        secondParam:second,
    }
    );