/* 等分組
顯示資料在 N 等份中的排行第幾等份
*/

set @tiers = 3;

select product.*, ceil((rank() over (order by price)) / c_tb.c * @tiers) as tier
from product join (select count(*) as c from product) as c_tb;

