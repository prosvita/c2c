block('page').match((node, ctx) => ctx.og).def()((node, ctx) => {
    if (ctx.og) {
        ctx.og.title = ctx.title;
        ctx.head.push({
            elem: 'og',
            og: ctx.og
        });
    }

    return applyNext();
});
