module.exports = function(babel) {
  const { types: t } = babel;

  return {
    name: "transform-foreach-to-for",
    visitor: {
      CallExpression(path) {
        if (
          t.isMemberExpression(path.node.callee) &&
          t.isIdentifier(path.node.callee.property, { name: "forEach" })
        ) {
          const array = path.node.callee.object;
          const callback = path.node.arguments[0];
          const params = callback.params;
          
          // 변수 선언부 생성
          const declarations = [];
          if (params[0]) {
            declarations.push(
              t.variableDeclarator(
                params[0],
                t.memberExpression(array, t.identifier("i"), true)
              )
            );
          }
          if (params[1]) {
            declarations.push(
              t.variableDeclarator(params[1], t.identifier("i"))
            );
          }
          if (params[2]) {
            declarations.push(
              t.variableDeclarator(params[2], array)
            );
          }

          const forLoop = t.forStatement(
            t.variableDeclaration("let", [
              t.variableDeclarator(t.identifier("i"), t.numericLiteral(0))
            ]),
            t.binaryExpression(
              "<",
              t.identifier("i"),
              t.memberExpression(array, t.identifier("length"))
            ),
            t.updateExpression("++", t.identifier("i"), false),
            t.blockStatement([
              t.variableDeclaration("const", declarations),
              callback.body
            ])
          );

          path.replaceWith(forLoop);
        }
      }
    }
  };
};