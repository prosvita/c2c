block('head').match(node => node.mods.level).tag()((node, ctx) => 'h' + ctx.mods.level);
