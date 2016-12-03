class EditPage
  include PageObject

<<<<<<< HEAD
  text_area(:edit_page_content, id: 'wpTextbox1')
  button(:preview_button, id: 'wpPreview')
  button(:show_changes_button, id: 'wpDiff')
  button(:save_button, id: 'wpSave')
=======
  page_url 'Special:Random?action=edit'

  text_area(:article_text, id: 'wpTextbox1')
  button(:preview, id: 'wpPreview')
  span(:start_editing, text: 'Start editing')

  def math_image_element
    browser.img(class: 'mwe-math-fallback-image-inline')
  end
>>>>>>> 67051315168695b275b2764f39c13e761c567ef4
end
