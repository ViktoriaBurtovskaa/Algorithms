let tree = {
    value: 1,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 3,
      left: {
        value: 4,
        left: null,
        right: null
      },
      right: null
    }
  };

  function inorder(tree) {
    if (tree !== null) {
      inorder(tree.left);
      console.log(tree.value);
      inorder(tree.right);
    }
  }
  
  function preorder(tree) {
    if (tree !== null) {
      console.log(tree.value);
      preorder(tree.left);
      preorder(tree.right);
    }
  }
  
  function postorder(tree) {
    if (tree !== null) {
      postorder(tree.left);
      postorder(tree.right);
      console.log(tree.value);
    }
  }
  console.log("Inorder:");
  inorder(tree);
  
  console.log("Preorder:");
  preorder(tree);
  
  console.log("Postorder:");
  postorder(tree);
    