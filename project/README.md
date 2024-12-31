
```bash
npm run dev
```


# How to fix performance issue of this problem for 100K items:

for large number of responses (100k), we have multiple choices:

1- Pagination of API to get response in partitions on each server request. Therefore we render different components to show each part of stadium.
So our UI should give the user some options at first so he can select the desired part of stadium. Then after his selection we render related
component which inside it we request to server to get part of 100K responses and render the list.

2- Paginate server response at FrontEnd (if we don't want to paginate this endpoint at server): After partitioning response, then
like first solution we can just use each part in related component. Then we are render each component after user selection.

3- Use virtualized list to give user better UX (if we can don't want to paginate at all): use some libraries like react-window
