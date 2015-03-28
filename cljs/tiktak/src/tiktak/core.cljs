(ns tiktak.core
    (:require [rum :as r]))

(enable-console-print!)

(def post
  {:text "First Post"
   :author "Jane"})

(r/defc render-post [post]
  [:blockquote (:text post) [:cite (:author post)]])

(r/mount (render-post post)
         (.getElementById js/document "app"))
