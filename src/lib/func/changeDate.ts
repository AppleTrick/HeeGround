export const changeDate = (dateString: string | Date | undefined): string => {
    if (typeof dateString === 'string' || dateString instanceof Date) {
        const date = new Date(dateString);

        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formattedDate: string = new Intl.DateTimeFormat('en-GB', options).format(date);

        const formattedDateWithDot: string = formattedDate.replace(/\//g, '.');
        return formattedDateWithDot;
    } else {
        return "작성 날짜를 알수 없습니다"
    }
};