import Tippy from "@tippyjs/react";
import { FilterBy, SortingHat } from "components";
import { useNote, useUserDetails } from "contexts";
import styles from "./NotesToolbar.module.css";

const NotesToolbar = () => {
  const { dispatchNote } = useNote();
  const { userState } = useUserDetails();

  return (
    <div className={`${styles.toolbar} flex gap-d30`}>
      <h2>Welcome, {userState.firstName}</h2>
      <div className={`flex ${styles.ctaSection}`}>
        <Tippy
          content={<SortingHat />}
          interactive={true}
          arrow={true}
          trigger="click"
          placement="left-end"
          animation="scale-subtle"
        >
          <div className={`${styles.toolbarCta} children-centered pointer`}>
            <span className="material-icons md-24">sort</span>
            <span className={`${styles.ctaText}`}>Sort</span>
          </div>
        </Tippy>
        <Tippy
          content={<FilterBy />}
          interactive={true}
          arrow={true}
          trigger= "click"
          placement="left-end"
          animation="scale-subtle"
        >
          <div className={`${styles.toolbarCta} children-centered pointer`}>
            <span className="material-icons md-24">filter_alt</span>
            <span className={`${styles.ctaText}`}>Filter</span>
          </div>
        </Tippy>
        <Tippy>
          <div
            className={`${styles.toolbarCta} children-centered pointer`}
            onClick={() => dispatchNote({ type: "NEW_NOTE" })}
          >
            <span className="material-icons md-24">add</span>
            <span className={`${styles.ctaText}`}>Add new</span>
          </div>
        </Tippy>
      </div>
    </div>
  );
};

export default NotesToolbar;
