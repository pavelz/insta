# frozen_string_literal: true

# WHAT
class UtilityController < ApplicationController
  def alive
    Rails.logger.warn('OK JASON RAILS 🤣 ')
    render plain: 'OK RAILS ✌️'
  end
end
